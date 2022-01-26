// https://www.terraform.io/docs/providers/tls/r/locally_signed_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocallySignedCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uses that are allowed for the certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#allowed_uses LocallySignedCert#allowed_uses}
  */
  readonly allowedUses: string[];
  /**
  * PEM-encoded CA certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#ca_cert_pem LocallySignedCert#ca_cert_pem}
  */
  readonly caCertPem: string;
  /**
  * Name of the algorithm used to generate the certificate's private key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#ca_key_algorithm LocallySignedCert#ca_key_algorithm}
  */
  readonly caKeyAlgorithm: string;
  /**
  * PEM-encoded CA private key used to sign the certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#ca_private_key_pem LocallySignedCert#ca_private_key_pem}
  */
  readonly caPrivateKeyPem: string;
  /**
  * PEM-encoded certificate request
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#cert_request_pem LocallySignedCert#cert_request_pem}
  */
  readonly certRequestPem: string;
  /**
  * Number of hours before the certificates expiry when a new certificate will be generated
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#early_renewal_hours LocallySignedCert#early_renewal_hours}
  */
  readonly earlyRenewalHours?: number;
  /**
  * Whether the generated certificate will be usable as a CA certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#is_ca_certificate LocallySignedCert#is_ca_certificate}
  */
  readonly isCaCertificate?: boolean | cdktf.IResolvable;
  /**
  * If true, the generated certificate will include a subject key identifier.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#set_subject_key_id LocallySignedCert#set_subject_key_id}
  */
  readonly setSubjectKeyId?: boolean | cdktf.IResolvable;
  /**
  * Number of hours that the certificate will remain valid for
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#validity_period_hours LocallySignedCert#validity_period_hours}
  */
  readonly validityPeriodHours: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert tls_locally_signed_cert}
*/
export class LocallySignedCert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "tls_locally_signed_cert";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert tls_locally_signed_cert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocallySignedCertConfig
  */
  public constructor(scope: Construct, id: string, config: LocallySignedCertConfig) {
    super(scope, id, {
      terraformResourceType: 'tls_locally_signed_cert',
      terraformGeneratorMetadata: {
        providerName: 'tls'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowedUses = config.allowedUses;
    this._caCertPem = config.caCertPem;
    this._caKeyAlgorithm = config.caKeyAlgorithm;
    this._caPrivateKeyPem = config.caPrivateKeyPem;
    this._certRequestPem = config.certRequestPem;
    this._earlyRenewalHours = config.earlyRenewalHours;
    this._isCaCertificate = config.isCaCertificate;
    this._setSubjectKeyId = config.setSubjectKeyId;
    this._validityPeriodHours = config.validityPeriodHours;
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

  // ca_cert_pem - computed: false, optional: false, required: true
  private _caCertPem?: string; 
  public get caCertPem() {
    return this.getStringAttribute('ca_cert_pem');
  }
  public set caCertPem(value: string) {
    this._caCertPem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertPemInput() {
    return this._caCertPem;
  }

  // ca_key_algorithm - computed: false, optional: false, required: true
  private _caKeyAlgorithm?: string; 
  public get caKeyAlgorithm() {
    return this.getStringAttribute('ca_key_algorithm');
  }
  public set caKeyAlgorithm(value: string) {
    this._caKeyAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caKeyAlgorithmInput() {
    return this._caKeyAlgorithm;
  }

  // ca_private_key_pem - computed: false, optional: false, required: true
  private _caPrivateKeyPem?: string; 
  public get caPrivateKeyPem() {
    return this.getStringAttribute('ca_private_key_pem');
  }
  public set caPrivateKeyPem(value: string) {
    this._caPrivateKeyPem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caPrivateKeyPemInput() {
    return this._caPrivateKeyPem;
  }

  // cert_pem - computed: true, optional: false, required: false
  public get certPem() {
    return this.getStringAttribute('cert_pem');
  }

  // cert_request_pem - computed: false, optional: false, required: true
  private _certRequestPem?: string; 
  public get certRequestPem() {
    return this.getStringAttribute('cert_request_pem');
  }
  public set certRequestPem(value: string) {
    this._certRequestPem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certRequestPemInput() {
    return this._certRequestPem;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_uses: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedUses),
      ca_cert_pem: cdktf.stringToTerraform(this._caCertPem),
      ca_key_algorithm: cdktf.stringToTerraform(this._caKeyAlgorithm),
      ca_private_key_pem: cdktf.stringToTerraform(this._caPrivateKeyPem),
      cert_request_pem: cdktf.stringToTerraform(this._certRequestPem),
      early_renewal_hours: cdktf.numberToTerraform(this._earlyRenewalHours),
      is_ca_certificate: cdktf.booleanToTerraform(this._isCaCertificate),
      set_subject_key_id: cdktf.booleanToTerraform(this._setSubjectKeyId),
      validity_period_hours: cdktf.numberToTerraform(this._validityPeriodHours),
    };
  }
}
