/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SelfSignedCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of key usages allowed for the issued certificate. Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#allowed_uses SelfSignedCert#allowed_uses}
  */
  readonly allowedUses: string[];
  /**
  * List of DNS names for which a certificate is being requested (i.e. certificate subjects).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#dns_names SelfSignedCert#dns_names}
  */
  readonly dnsNames?: string[];
  /**
  * The resource will consider the certificate to have expired the given number of hours before its actual expiry time. This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#early_renewal_hours SelfSignedCert#early_renewal_hours}
  */
  readonly earlyRenewalHours?: number;
  /**
  * List of IP addresses for which a certificate is being requested (i.e. certificate subjects).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#ip_addresses SelfSignedCert#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Is the generated certificate representing a Certificate Authority (CA) (default: `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#is_ca_certificate SelfSignedCert#is_ca_certificate}
  */
  readonly isCaCertificate?: boolean | cdktf.IResolvable;
  /**
  * Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#private_key_pem SelfSignedCert#private_key_pem}
  */
  readonly privateKeyPem: string;
  /**
  * Should the generated certificate include an [authority key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.1): for self-signed certificates this is the same value as the [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#set_authority_key_id SelfSignedCert#set_authority_key_id}
  */
  readonly setAuthorityKeyId?: boolean | cdktf.IResolvable;
  /**
  * Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#set_subject_key_id SelfSignedCert#set_subject_key_id}
  */
  readonly setSubjectKeyId?: boolean | cdktf.IResolvable;
  /**
  * List of URIs for which a certificate is being requested (i.e. certificate subjects).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#uris SelfSignedCert#uris}
  */
  readonly uris?: string[];
  /**
  * Number of hours, after initial issuing, that the certificate will remain valid for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#validity_period_hours SelfSignedCert#validity_period_hours}
  */
  readonly validityPeriodHours: number;
  /**
  * subject block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#subject SelfSignedCert#subject}
  */
  readonly subject?: SelfSignedCertSubject[] | cdktf.IResolvable;
}
export interface SelfSignedCertSubject {
  /**
  * Distinguished name: `CN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#common_name SelfSignedCert#common_name}
  */
  readonly commonName?: string;
  /**
  * Distinguished name: `C`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#country SelfSignedCert#country}
  */
  readonly country?: string;
  /**
  * Distinguished name: `L`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#locality SelfSignedCert#locality}
  */
  readonly locality?: string;
  /**
  * Distinguished name: `O`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#organization SelfSignedCert#organization}
  */
  readonly organization?: string;
  /**
  * Distinguished name: `OU`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#organizational_unit SelfSignedCert#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Distinguished name: `PC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#postal_code SelfSignedCert#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Distinguished name: `ST`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#province SelfSignedCert#province}
  */
  readonly province?: string;
  /**
  * Distinguished name: `SERIALNUMBER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#serial_number SelfSignedCert#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Distinguished name: `STREET`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#street_address SelfSignedCert#street_address}
  */
  readonly streetAddress?: string[];
}

export function selfSignedCertSubjectToTerraform(struct?: SelfSignedCertSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    province: cdktf.stringToTerraform(struct!.province),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    street_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streetAddress),
  }
}


export function selfSignedCertSubjectToHclTerraform(struct?: SelfSignedCertSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    province: {
      value: cdktf.stringToHclTerraform(struct!.province),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    street_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streetAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SelfSignedCertSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SelfSignedCertSubject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._streetAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetAddress = this._streetAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfSignedCertSubject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._postalCode = undefined;
      this._province = undefined;
      this._serialNumber = undefined;
      this._streetAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._country = value.country;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._postalCode = value.postalCode;
      this._province = value.province;
      this._serialNumber = value.serialNumber;
      this._streetAddress = value.streetAddress;
    }
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // province - computed: false, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // street_address - computed: false, optional: true, required: false
  private _streetAddress?: string[]; 
  public get streetAddress() {
    return this.getListAttribute('street_address');
  }
  public set streetAddress(value: string[]) {
    this._streetAddress = value;
  }
  public resetStreetAddress() {
    this._streetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressInput() {
    return this._streetAddress;
  }
}

export class SelfSignedCertSubjectList extends cdktf.ComplexList {
  public internalValue? : SelfSignedCertSubject[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SelfSignedCertSubjectOutputReference {
    return new SelfSignedCertSubjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert tls_self_signed_cert}
*/
export class SelfSignedCert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tls_self_signed_cert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SelfSignedCert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SelfSignedCert to import
  * @param importFromId The id of the existing SelfSignedCert that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SelfSignedCert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tls_self_signed_cert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert tls_self_signed_cert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SelfSignedCertConfig
  */
  public constructor(scope: Construct, id: string, config: SelfSignedCertConfig) {
    super(scope, id, {
      terraformResourceType: 'tls_self_signed_cert',
      terraformGeneratorMetadata: {
        providerName: 'tls',
        providerVersion: '4.0.6',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedUses = config.allowedUses;
    this._dnsNames = config.dnsNames;
    this._earlyRenewalHours = config.earlyRenewalHours;
    this._ipAddresses = config.ipAddresses;
    this._isCaCertificate = config.isCaCertificate;
    this._privateKeyPem = config.privateKeyPem;
    this._setAuthorityKeyId = config.setAuthorityKeyId;
    this._setSubjectKeyId = config.setSubjectKeyId;
    this._uris = config.uris;
    this._validityPeriodHours = config.validityPeriodHours;
    this._subject.internalValue = config.subject;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_uses - computed: false, optional: false, required: true
  private _allowedUses?: string[]; 
  public get allowedUses() {
    return this.getListAttribute('allowed_uses');
  }
  public set allowedUses(value: string[]) {
    this._allowedUses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUsesInput() {
    return this._allowedUses;
  }

  // cert_pem - computed: true, optional: false, required: false
  public get certPem() {
    return this.getStringAttribute('cert_pem');
  }

  // dns_names - computed: false, optional: true, required: false
  private _dnsNames?: string[]; 
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }
  public set dnsNames(value: string[]) {
    this._dnsNames = value;
  }
  public resetDnsNames() {
    this._dnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNamesInput() {
    return this._dnsNames;
  }

  // early_renewal_hours - computed: true, optional: true, required: false
  private _earlyRenewalHours?: number; 
  public get earlyRenewalHours() {
    return this.getNumberAttribute('early_renewal_hours');
  }
  public set earlyRenewalHours(value: number) {
    this._earlyRenewalHours = value;
  }
  public resetEarlyRenewalHours() {
    this._earlyRenewalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyRenewalHoursInput() {
    return this._earlyRenewalHours;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // is_ca_certificate - computed: true, optional: true, required: false
  private _isCaCertificate?: boolean | cdktf.IResolvable; 
  public get isCaCertificate() {
    return this.getBooleanAttribute('is_ca_certificate');
  }
  public set isCaCertificate(value: boolean | cdktf.IResolvable) {
    this._isCaCertificate = value;
  }
  public resetIsCaCertificate() {
    this._isCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCaCertificateInput() {
    return this._isCaCertificate;
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // private_key_pem - computed: false, optional: false, required: true
  private _privateKeyPem?: string; 
  public get privateKeyPem() {
    return this.getStringAttribute('private_key_pem');
  }
  public set privateKeyPem(value: string) {
    this._privateKeyPem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPemInput() {
    return this._privateKeyPem;
  }

  // ready_for_renewal - computed: true, optional: false, required: false
  public get readyForRenewal() {
    return this.getBooleanAttribute('ready_for_renewal');
  }

  // set_authority_key_id - computed: true, optional: true, required: false
  private _setAuthorityKeyId?: boolean | cdktf.IResolvable; 
  public get setAuthorityKeyId() {
    return this.getBooleanAttribute('set_authority_key_id');
  }
  public set setAuthorityKeyId(value: boolean | cdktf.IResolvable) {
    this._setAuthorityKeyId = value;
  }
  public resetSetAuthorityKeyId() {
    this._setAuthorityKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAuthorityKeyIdInput() {
    return this._setAuthorityKeyId;
  }

  // set_subject_key_id - computed: true, optional: true, required: false
  private _setSubjectKeyId?: boolean | cdktf.IResolvable; 
  public get setSubjectKeyId() {
    return this.getBooleanAttribute('set_subject_key_id');
  }
  public set setSubjectKeyId(value: boolean | cdktf.IResolvable) {
    this._setSubjectKeyId = value;
  }
  public resetSetSubjectKeyId() {
    this._setSubjectKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSubjectKeyIdInput() {
    return this._setSubjectKeyId;
  }

  // uris - computed: false, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }

  // validity_end_time - computed: true, optional: false, required: false
  public get validityEndTime() {
    return this.getStringAttribute('validity_end_time');
  }

  // validity_period_hours - computed: false, optional: false, required: true
  private _validityPeriodHours?: number; 
  public get validityPeriodHours() {
    return this.getNumberAttribute('validity_period_hours');
  }
  public set validityPeriodHours(value: number) {
    this._validityPeriodHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validityPeriodHoursInput() {
    return this._validityPeriodHours;
  }

  // validity_start_time - computed: true, optional: false, required: false
  public get validityStartTime() {
    return this.getStringAttribute('validity_start_time');
  }

  // subject - computed: false, optional: true, required: false
  private _subject = new SelfSignedCertSubjectList(this, "subject", false);
  public get subject() {
    return this._subject;
  }
  public putSubject(value: SelfSignedCertSubject[] | cdktf.IResolvable) {
    this._subject.internalValue = value;
  }
  public resetSubject() {
    this._subject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_uses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedUses),
      dns_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsNames),
      early_renewal_hours: cdktf.numberToTerraform(this._earlyRenewalHours),
      ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddresses),
      is_ca_certificate: cdktf.booleanToTerraform(this._isCaCertificate),
      private_key_pem: cdktf.stringToTerraform(this._privateKeyPem),
      set_authority_key_id: cdktf.booleanToTerraform(this._setAuthorityKeyId),
      set_subject_key_id: cdktf.booleanToTerraform(this._setSubjectKeyId),
      uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uris),
      validity_period_hours: cdktf.numberToTerraform(this._validityPeriodHours),
      subject: cdktf.listMapper(selfSignedCertSubjectToTerraform, true)(this._subject.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_uses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedUses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      early_renewal_hours: {
        value: cdktf.numberToHclTerraform(this._earlyRenewalHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_ca_certificate: {
        value: cdktf.booleanToHclTerraform(this._isCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_key_pem: {
        value: cdktf.stringToHclTerraform(this._privateKeyPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_authority_key_id: {
        value: cdktf.booleanToHclTerraform(this._setAuthorityKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      set_subject_key_id: {
        value: cdktf.booleanToHclTerraform(this._setSubjectKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uris),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      validity_period_hours: {
        value: cdktf.numberToHclTerraform(this._validityPeriodHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subject: {
        value: cdktf.listMapperHcl(selfSignedCertSubjectToHclTerraform, true)(this._subject.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SelfSignedCertSubjectList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
