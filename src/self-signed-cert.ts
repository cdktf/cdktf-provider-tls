// https://www.terraform.io/docs/providers/tls/r/self_signed_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SelfSignedCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uses that are allowed for the certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#allowed_uses SelfSignedCert#allowed_uses}
  */
  readonly allowedUses: string[];
  /**
  * List of DNS names to use as subjects of the certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#dns_names SelfSignedCert#dns_names}
  */
  readonly dnsNames?: string[];
  /**
  * Number of hours before the certificates expiry when a new certificate will be generated
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#early_renewal_hours SelfSignedCert#early_renewal_hours}
  */
  readonly earlyRenewalHours?: number;
  /**
  * List of IP addresses to use as subjects of the certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#ip_addresses SelfSignedCert#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Whether the generated certificate will be usable as a CA certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#is_ca_certificate SelfSignedCert#is_ca_certificate}
  */
  readonly isCaCertificate?: boolean | cdktf.IResolvable;
  /**
  * Name of the algorithm to use to generate the certificate's private key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#key_algorithm SelfSignedCert#key_algorithm}
  */
  readonly keyAlgorithm: string;
  /**
  * PEM-encoded private key that the certificate will belong to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#private_key_pem SelfSignedCert#private_key_pem}
  */
  readonly privateKeyPem: string;
  /**
  * If true, the generated certificate will include a subject key identifier.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#set_subject_key_id SelfSignedCert#set_subject_key_id}
  */
  readonly setSubjectKeyId?: boolean | cdktf.IResolvable;
  /**
  * List of URIs to use as subjects of the certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#uris SelfSignedCert#uris}
  */
  readonly uris?: string[];
  /**
  * Number of hours that the certificate will remain valid for
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#validity_period_hours SelfSignedCert#validity_period_hours}
  */
  readonly validityPeriodHours: number;
  /**
  * subject block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#subject SelfSignedCert#subject}
  */
  readonly subject: SelfSignedCertSubject[];
}
export interface SelfSignedCertSubject {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#common_name SelfSignedCert#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#country SelfSignedCert#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#locality SelfSignedCert#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#organization SelfSignedCert#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#organizational_unit SelfSignedCert#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#postal_code SelfSignedCert#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#province SelfSignedCert#province}
  */
  readonly province?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#serial_number SelfSignedCert#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#street_address SelfSignedCert#street_address}
  */
  readonly streetAddress?: string[];
}

export function selfSignedCertSubjectToTerraform(struct?: SelfSignedCertSubject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public static readonly tfResourceType: string = "tls_self_signed_cert";

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
        providerName: 'tls'
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

  // id - computed: true, optional: true, required: false
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
    return this.getBooleanAttribute('is_ca_certificate') as any;
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

  // key_algorithm - computed: false, optional: false, required: true
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
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
    return this.getBooleanAttribute('ready_for_renewal') as any;
  }

  // set_subject_key_id - computed: false, optional: true, required: false
  private _setSubjectKeyId?: boolean | cdktf.IResolvable; 
  public get setSubjectKeyId() {
    return this.getBooleanAttribute('set_subject_key_id') as any;
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
  private _subject?: SelfSignedCertSubject[]; 
  public get subject() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subject') as any;
  }
  public set subject(value: SelfSignedCertSubject[]) {
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
