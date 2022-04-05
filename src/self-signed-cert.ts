// https://www.terraform.io/docs/providers/tls/r/self_signed_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SelfSignedCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of key usages allowed for the issued certificate. Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#allowed_uses SelfSignedCert#allowed_uses}
  */
  readonly allowedUses: string[];
  /**
  * List of DNS names for which a certificate is being requested (i.e. certificate subjects).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#dns_names SelfSignedCert#dns_names}
  */
  readonly dnsNames?: string[];
  /**
  * The resource will consider the certificate to have expired the given number of hours before its actual expiry time. This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#early_renewal_hours SelfSignedCert#early_renewal_hours}
  */
  readonly earlyRenewalHours?: number;
  /**
  * List of IP addresses for which a certificate is being requested (i.e. certificate subjects).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#ip_addresses SelfSignedCert#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Is the generated certificate representing a Certificate Authority (CA) (default: `false`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#is_ca_certificate SelfSignedCert#is_ca_certificate}
  */
  readonly isCaCertificate?: boolean | cdktf.IResolvable;
  /**
  * Name of the algorithm used when generating the private key provided in `private_key_pem`. **NOTE**: this is deprecated and ignored, as the key algorithm is now inferred from the key. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#key_algorithm SelfSignedCert#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. Only an irreversible secure hash of the private key will be stored in the Terraform state.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#private_key_pem SelfSignedCert#private_key_pem}
  */
  readonly privateKeyPem: string;
  /**
  * Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#set_subject_key_id SelfSignedCert#set_subject_key_id}
  */
  readonly setSubjectKeyId?: boolean | cdktf.IResolvable;
  /**
  * List of URIs for which a certificate is being requested (i.e. certificate subjects).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#uris SelfSignedCert#uris}
  */
  readonly uris?: string[];
  /**
  * Number of hours, after initial issuing, that the certificate will remain valid for.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#validity_period_hours SelfSignedCert#validity_period_hours}
  */
  readonly validityPeriodHours: number;
  /**
  * subject block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#subject SelfSignedCert#subject}
  */
  readonly subject: SelfSignedCertSubject[] | cdktf.IResolvable;
}
export interface SelfSignedCertSubject {
  /**
  * Distinguished name: `CN`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#common_name SelfSignedCert#common_name}
  */
  readonly commonName?: string;
  /**
  * Distinguished name: `C`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#country SelfSignedCert#country}
  */
  readonly country?: string;
  /**
  * Distinguished name: `L`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#locality SelfSignedCert#locality}
  */
  readonly locality?: string;
  /**
  * Distinguished name: `O`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#organization SelfSignedCert#organization}
  */
  readonly organization?: string;
  /**
  * Distinguished name: `OU`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#organizational_unit SelfSignedCert#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Distinguished name: `PC`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#postal_code SelfSignedCert#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Distinguished name: `ST`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#province SelfSignedCert#province}
  */
  readonly province?: string;
  /**
  * Distinguished name: `SERIALNUMBER`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#serial_number SelfSignedCert#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Distinguished name: `STREET`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#street_address SelfSignedCert#street_address}
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
    street_address: cdktf.listMapper(cdktf.stringToTerraform)(struct!.streetAddress),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert tls_self_signed_cert}
*/
export class SelfSignedCert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tls_self_signed_cert";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert tls_self_signed_cert} Resource
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
        providerVersion: '3.2.1',
        providerVersionConstraint: '~> 3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowedUses = config.allowedUses;
    this._dnsNames = config.dnsNames;
    this._earlyRenewalHours = config.earlyRenewalHours;
    this._ipAddresses = config.ipAddresses;
    this._isCaCertificate = config.isCaCertificate;
    this._keyAlgorithm = config.keyAlgorithm;
    this._privateKeyPem = config.privateKeyPem;
    this._setSubjectKeyId = config.setSubjectKeyId;
    this._uris = config.uris;
    this._validityPeriodHours = config.validityPeriodHours;
    this._subject = config.subject;
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

  // early_renewal_hours - computed: false, optional: true, required: false
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

  // is_ca_certificate - computed: false, optional: true, required: false
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

  // key_algorithm - computed: true, optional: true, required: false
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  public resetKeyAlgorithm() {
    this._keyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
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

  // set_subject_key_id - computed: false, optional: true, required: false
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

  // subject - computed: false, optional: false, required: true
  private _subject?: SelfSignedCertSubject[] | cdktf.IResolvable; 
  public get subject() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subject');
  }
  public set subject(value: SelfSignedCertSubject[] | cdktf.IResolvable) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_uses: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedUses),
      dns_names: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsNames),
      early_renewal_hours: cdktf.numberToTerraform(this._earlyRenewalHours),
      ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._ipAddresses),
      is_ca_certificate: cdktf.booleanToTerraform(this._isCaCertificate),
      key_algorithm: cdktf.stringToTerraform(this._keyAlgorithm),
      private_key_pem: cdktf.stringToTerraform(this._privateKeyPem),
      set_subject_key_id: cdktf.booleanToTerraform(this._setSubjectKeyId),
      uris: cdktf.listMapper(cdktf.stringToTerraform)(this._uris),
      validity_period_hours: cdktf.numberToTerraform(this._validityPeriodHours),
      subject: cdktf.listMapper(selfSignedCertSubjectToTerraform)(this._subject),
    };
  }
}
